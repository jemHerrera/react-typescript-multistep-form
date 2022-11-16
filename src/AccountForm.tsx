import { FormWrapper } from "./FormWrapper"

type AccountData = {
    email: string,
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({ email, password, updateFields}: AccountFormProps){
    return (
        <FormWrapper title="Account Creation">
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                value={email}
                onChange={e => updateFields({ email : e.target.value })}
                autoFocus 
                required
            />
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                value={password}
                onChange={e => updateFields({ password : e.target.value })}
                required 
                type="password" 
            />
        </FormWrapper>
    )
}