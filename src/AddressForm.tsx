import { FormWrapper } from "./FormWrapper"

type AddressData = {
    street: string,
    city: string,
    state: string,
    zip: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({street, city, state, zip, updateFields }: AddressFormProps){
    return (
        <FormWrapper title="Address">
            <label htmlFor="street">Sreet</label>
            <input 
                id="street" 
                type="text" 
                autoFocus 
                required 
                value={street}
                onChange={e => updateFields({ street: e.target.value })}
            />
            <label htmlFor="city">City</label>
            <input 
                id="city" 
                required 
                type="text" 
                value={city}
                onChange={e => updateFields({ city: e.target.value })}
            />
            <label htmlFor="state">State</label>
            <input 
                id="state" 
                required 
                type="text" 
                value={state}
                onChange={e => updateFields({ state: e.target.value })}
            />
            <label htmlFor="zip">Zip</label>
            <input 
                id="zip" 
                type="text" 
                required 
                value={zip}
                onChange={e => updateFields({ zip: e.target.value })}
            />
        </FormWrapper>
    )
}