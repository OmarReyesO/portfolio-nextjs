import { NextResponse } from "next/server"
import { EmailTemplate } from "@/app/components/EmailTemplate"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const mailBody: EmailBodyProps = await req.json()
  try {
    const data = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: ["edgar0.reyes0@gmail.com"],
      subject: mailBody.subject,
      react: EmailTemplate({
        message: mailBody.message,
        subject: mailBody.subject,
        email: mailBody.email
      }),
      text: ""
    })

    return Response.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
