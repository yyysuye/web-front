function HelloMessage(props){
	return <h1>Hello！</h1> ;
};

const element = <HelloMessage />;

ReactDOM.render(
	element,
	document.getELementById("root")
);

const user = {
			firstName: "y",
			lastName: "c"
		};

		function getName(o){
			return o.firstName+o.lastName;
		}

		var element = (<h1>hello,{getName(user)}</h1>);

		ReactDOM.render(
			element,
			document.getElementById("root")
		);