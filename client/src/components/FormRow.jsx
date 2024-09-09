const FormRow = ({ labelText, type, name, defaultValue }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">{labelText || name}</label>
            <input type={type} name={name} defaultValue={defaultValue} className="form-input" required />
        </div>
    );
};
export default FormRow;