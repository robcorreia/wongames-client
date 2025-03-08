import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material'
import { FormWrapper, FormLink } from '../Form'
import TextField from '../TextField'
import Button from '../Button'
import { AccountCircle } from 'styled-icons/material-outlined'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        name="confirmPassword"
        placeholder="ConfirmPassword"
        type="password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
