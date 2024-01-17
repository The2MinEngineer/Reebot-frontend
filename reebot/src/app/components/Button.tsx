import React from 'react'

const Button = ({ label, onClick }: {
    label: string;
    onClick?: () => void
}) => {
  return (
		<button className="rounded-[10px] bg-blue-500 w-full text-white text-center py-5" onClick={onClick}>
			{label}
		</button>
	);
}

export default Button