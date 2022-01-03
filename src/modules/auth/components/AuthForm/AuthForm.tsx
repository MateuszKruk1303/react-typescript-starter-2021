import { Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useTranslation } from 'react-i18next'
import { paths } from 'config'
import { Form, PasswordField, TextField, ErrorAlert } from 'shared/components'
import { AuthFormFields, useFormProps } from './AuthForm.utils'
import { MODULE_NAME } from 'modules/auth/strings'

interface LoginFormProps {
  path: string
  submitText: string
}

const LoginForm = ({ path, submitText, ...props }: LoginFormProps) => {
  const isLoginForm = path === paths.login
  const { formProps, error } = useFormProps(isLoginForm)
  const { isSubmitting } = formProps.formState
  const { t } = useTranslation(MODULE_NAME)
  return (
    <Form {...formProps} {...props}>
      <Grid container spacing={3}>
        <Grid container justifyContent="center">
          {error && <ErrorAlert>{error}</ErrorAlert>}
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                name={AuthFormFields.Name}
                label={t('username')}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                required
                name={AuthFormFields.Password}
                label={t('password')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              loading={isSubmitting}
            >
              {submitText}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}

export default LoginForm
