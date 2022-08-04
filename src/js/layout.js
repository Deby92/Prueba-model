import login from "./component/login";
import NotFound from "./component/NotFound";
import register from "./component/register";
import tables from "./component/tables";
import sb_admin_2 from "./component/sb-admin-2";
import login from "./component/login";
import charts from "./component/charts";
import Home from "./component/home";
import utilities_animations from "./component/utilities_animations";
import utilities_border from "./component/utilities_border";
import utilities_color from "./component/utilities_color";
import utilities_others from "./component/utilities_others";
import forgot_pasword from "./component/forgot_pasword";
import home from "./component/home";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Nav_bar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/forgot_pasword">
							<Forgot_pasword />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/blank">
							<Blank />
						</Route>
						<Route exact path="/charts">
							<Charts />
						</Route>
						<Route exact path="/tables">
							<Tables />
						</Route>
						<Route exact path="exact path">
							<h1>Not found!</h1>
                            <NotFound />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
