import React from 'react';
import Button from './ui/Button';
import TextField from './ui/TextField';

const Form = ({ fields = [], children }) => {
  const { inputs, buttons } = fields;
  const { label } = inputs;
  console.log(inputs);
  return (
    <form>
      {inputs.map((input) => (
        <div key={input.title}>
          {input.label ? (
            <TextField
              label={input.label}
              placeholder={input.title}
              value={input.value}
              inputId={input.id}
              onChange={(e) => input.onChange(e.target.value)}
            />
          ) : (
            <TextField
              placeholder={input.title}
              value={input.value}
              inputId={input.id}
              onChange={(e) => input.onChange(e.target.value)}
            />
          )}
        </div>
      ))}
      <div className="flex gap-3 max-w-sm">
        <Button onClick={buttons.submit}>Сохранить</Button>
        <Button onClick={buttons.close}>Отменить</Button>
      </div>
      {children}
    </form>
  );
};

export default Form;
