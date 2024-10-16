export interface typeContact {
	fname: string;
	lname: string;
	email: string;
	phone: string | null;
	subject: string;
	message: string;
	newsletter: boolean;
}

export interface typeSignUp {
	email: string;
	password: string;
}

export interface typeSignIn {
	email: string;
	password: string;
}

export interface Subscribe {
	fname?: string;
	lname?: string;
	email: string;
	company?: string;
	phone?: string;
}
