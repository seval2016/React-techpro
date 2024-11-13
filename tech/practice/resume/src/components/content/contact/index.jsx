
import SectionHeader from "../section-header";

const Contact = () => {
	return (
		<section id="contact" className="contact">
            <SectionHeader title="Get In Touch"/>


			<form method="post" action="">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="InputName"
								id="InputName"
								placeholder="Your Name"
								required=""
							/>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="InputEmail"
								name="InputEmail"
								placeholder="Your Email"
								required=""
							/>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								name="InputPhone"
								id="InputPhone"
								placeholder="Phone (optional)"
							/>
						</div>
					</div>

					<div className="col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="InputSubject"
								name="InputSubject"
								placeholder="Subject"
							/>
						</div>
					</div>

					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<textarea
								name="InputMessage"
								id="InputMessage"
								className="form-control"
								rows="6"
								placeholder="Message"
								required=""
							></textarea>
						</div>
					</div>
				</div>

				<input
					type="submit"
					name="submit"
					id="submit"
					value="Send Message"
					className="btn btn-default pull-left"
				/>
			</form>
		</section>
	);
};

export default Contact;