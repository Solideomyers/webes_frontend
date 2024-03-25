import { Input } from '@nextui-org/react';
import { FaUserCircle } from 'react-icons/fa';

interface Props {
  type: string;
  label: string;
  placeholder: string;
  labelPlaceHolder: 'outside' | 'outside-left' | 'inside';
  variant: 'flat' | 'faded' | 'bordered' | 'underlined';
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  startContent: React.ReactNode;
}

export const InputsReview: React.FC<Props> = ({
  type,
  label,
  placeholder,
  labelPlaceHolder,
  variant,
  color,
  startContent,
}) => {
  return (
    <div>
      <Input
        type={type}
        isRequired
        onErrorCapture={() => console.log('campo void')}
        label={label}
        placeholder={placeholder}
        labelPlacement={labelPlaceHolder}
        variant={variant}
        color={color}
        startContent={startContent}
      />
    </div>
  );
};
