const INPUT_CLASSES =
  'w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-sakina-green focus:border-transparent focus:outline-none transition-all duration-300';

// as : 'input' | 'textarea' | 'select'. Les autres props sont transmises au champ.
const FormField = ({ id, label, as = 'input', required = false, children, ...props }) => {
  const Field = as;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <Field id={id} name={id} required={required} className={INPUT_CLASSES} {...props}>
        {children}
      </Field>
    </div>
  );
};

export default FormField;
