import React, {
	SelectHTMLAttributes,
	DetailedHTMLProps,
	ChangeEvent,
} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<
	SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: any[];
	onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
	options,
	onChange,
	onChangeOption,
	...restProps
}) => {
	const mappedOptions: any[] = options
		? options.map((item, index) => (
				<option key={`${item + index}`} value={item}>
					{item}
				</option>
		  ))
		: [];

	const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange && onChange(e);
		onChangeOption && onChangeOption(e.target.value);
	};

	return (
		<select onChange={onChangeCallback} {...restProps}>
			{mappedOptions}
		</select>
	);
};

export default SuperSelect;
