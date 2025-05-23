
import { RegisterForm } from "@/components/ui/register-form"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md  text-primary-foreground">
            <Sparkles  className="h-6 w-6 text-primary" />
          </div>
          Vest Ai.
        </Link>
        <RegisterForm />
      </div>
    </div>
  )
}
