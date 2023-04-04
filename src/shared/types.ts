export type AmPmType = 'am' | 'pm';

export type ClassName = string | null | undefined | (string | null | undefined)[];

export type Detail = 'hour' | 'minute' | 'second';

export type LooseValuePiece = string | Date | null;

export type LooseValue = LooseValuePiece | LooseValuePiece[]; // TODO: Change to [LooseValuePiece, LooseValuePiece]

type ValuePiece = string | null;

export type Value = ValuePiece | ValuePiece[]; // TODO: Change to [ValuePiece, ValuePiece]
