import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Image from '../components/Image';
import { dates, months, years } from '../services/dob';
const Login = () => {
	const [info, setInfo] = useState({
		fname: '',
		lname: '',
		email: '',
		password: '',
		date: '',
		month: '',
		year: '',
		gender: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo((prev) => ({ ...prev, [name]: value }));
		console.log(info);
		console.log(value);
	};
	const submit = (e) => {
		e.preventDefault();
		const { fname, lname, email, password, date, month, year, gender } = info;
		console.log(info);
		alert(
			`Name = ${
				(fname, lname)
			} \n E-Mail = ${email} \n Password = ${password} \n DOB : ${date}/${month}/${year} \n Gender = ${gender}`
		);
	};

	return (
		<>
			<div className="d-flex align-items-center justify-content-center flex-column my-4 wrapper">
				<Image name="facebook.svg" style={{ maxWidth: '300px' }} />

				<Card
					className="p-3 mx-1"
					style={{
						maxWidth: '430px',
						boxShadow: '0px 0px 10px grey',
					}}
				>
					<Form style={{ maxWidth: '500px' }} onSubmit={submit}>
						<div
							style={{
								borderBottom: '1px solid rgba(192, 192, 192, 0.644)',
							}}
							className="text-center mb-3"
						>
							<h3 className="mb-0">Create a new account</h3>
							<p className="mb-2">It's quick and easy.</p>
						</div>

						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridText1">
								<Form.Control
									type="text"
									placeholder="First Name"
									name="fname"
									value={info.fname}
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridText2">
								<Form.Control
									type="text"
									placeholder="Surname"
									name="lname"
									value={info.lname}
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>

						<Form.Group className="mb-3" controlId="formGridEmail">
							<Form.Control
								type="email"
								placeholder="Mobile number or E-Mail adrress"
								name="email"
								value={info.email}
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="formGridPassword"
							name="password"
						>
							<Form.Control
								placeholder="Password"
								type="password"
								name="password"
								value={info.password}
								onChange={handleChange}
							/>
						</Form.Group>
						<div>
							<small>Date of birth</small>
						</div>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridState">
								<Form.Select
									defaultValue="Choose..."
									onChange={handleChange}
									name="date"
									value={info.date}
								>
									<option value="">Date</option>
									{dates.map((date) => (
										<option value={date} key={date} readOnly>
											{date}
										</option>
									))}
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Select
									defaultValue="Choose..."
									onChange={handleChange}
									name="month"
									value={info.month}
								>
									<option value="">Month</option>
									{months.map((month) => (
										<option value={month} key={month}>
											{month}
										</option>
									))}
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col} controlId="formGridZip">
								<Form.Select
									defaultValue="Choose..."
									onChange={handleChange}
									name="year"
									value={info.year}
								>
									<option value="">Year</option>
									{years.map((year) => (
										<option value={year} key={year} readOnly>
											{year}
										</option>
									))}
								</Form.Select>
							</Form.Group>
						</Row>
						<div>
							<small>Gender</small>
						</div>
						<Row lassName="" onChange={handleChange}>
							<Col>
								<div className="gender">
									<label htmlFor="male">Male</label>
									<input
										type="radio"
										value="male"
										id="male"
										name="gender"
									/>
								</div>
							</Col>
							<Col>
								<div className="gender">
									<label htmlFor="female">Female</label>
									<input
										type="radio"
										value="female"
										id="female"
										name="gender"
									/>
								</div>
							</Col>
							<Col>
								<div className="gender">
									<label htmlFor="custom">Custom</label>
									<input
										type="radio"
										value="custom"
										id="custom"
										name="gender"
									/>
								</div>
							</Col>
						</Row>
						<div className="small-text">
							<small>
								People who use our service may have uploaded your
								contact information to Facebook.
								<span className="text-primary">Learn more</span>.
							</small>
						</div>
						<div className="small-text">
							<small>
								By clicking Sign Up, you agree to our
								<span className="text-primary">
									Terms, Privacy Policy
								</span>{' '}
								and
								<span className="text-primary">Cookies Policy</span>.
								You may receive SMS notifications from us and can opt
								out at any time.
							</small>
						</div>
						<div className="text-center">
							<Button
								variant="success"
								type="submit"
								className="px-5 py-1 my-2 btn"
							>
								Sign Up
							</Button>
							<div>
								<p className="text-primary my-2">
									Already have an account?
								</p>
							</div>
						</div>
					</Form>
				</Card>
			</div>
		</>
	);
};

export default Login;
