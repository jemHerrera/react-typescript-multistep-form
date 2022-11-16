import { FormWrapper } from "./FormWrapper"

type UserData = {
    firstName: string
    lastName: string
    age: string
}
type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
} 

export function UserForm({ firstName, lastName, age, updateFields }: UserFormProps){
    return (
        <FormWrapper title="User Details">
            <label htmlFor="firstName">First Name</label>
            <input 
                id="firstName" 
                value={firstName} 
                onChange={e => updateFields({ firstName: e.target.value })} 
                type="text" 
                required 
                autoFocus 
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
                id="lastName" 
                value={lastName} 
                onChange={e => updateFields({ lastName: e.target.value })} 
                type="text" 
                required 
            />
            <label htmlFor="age">Age</label>
            <input 
                id="age" 
                value={age} 
                onChange={e => updateFields({ age: e.target.value })} 
                type="number" 
                required 
                min={1} 
            />
        </FormWrapper>
    )
}