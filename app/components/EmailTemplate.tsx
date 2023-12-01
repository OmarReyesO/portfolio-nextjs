import * as React from "react"

export const EmailTemplate: React.FC<Readonly<EmailBodyProps>> = ({
  message,
  subject,
  email
}) => (
  <div>
    <h4>{subject}</h4>
    <p>From: {email}</p>
    <p>{message}</p>
  </div>
)
