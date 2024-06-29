import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HelloWorld from "../components/01-hello/hello-world";
import HelloReact from "../components/01-hello/hello-react";
import UserLayout from "../layouts/user-layout";
import Home from "../components/00-common/home";
import Jsx1 from "../components/02-jsx/jsx1";
import Jsx2 from "../components/02-jsx/jsx2";
import Style1 from "../components/03-style/style1";
import Style2 from "../components/03-style/style2";
import Style3 from "../components/03-style/style3";
import Clock1 from "../components/04-clock1/clock1";
import Customers from "../components/26-routing/customers";
import CustomerDetails from "../components/26-routing/customer-details";
import UseNavigate from "../components/26-routing/use-navigate";
import Converter from "../components/27-currencies/converter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "hello-world",
				element: <HelloWorld />,
			},
			{
				path: "hello-react",
				element: <HelloReact />,
			},
			{
				path: "jsx",
				children: [
					{
						path: "1",
						element: <Jsx1 />,
					},
					{
						path: "2",
						element: <Jsx2 />,
					},
				],
			},
			{
				path: "style",
				children: [
					{
						path: "1",
						element: <Style1 />,
					},
					{
						path: "2",
						element: <Style2 />,
					},
					{
						path: "3",
						element: <Style3 />,
					},
				],
			},
            {
                path: "clock1",
                element: <Clock1/>
            },
            {
                path: "customers",
                children: [
                    {
                        index: true,
                        element: <Customers/>
                    },
                    {
                        path: ":id",
                        element: <CustomerDetails/>
                    }
                ]
            },
            {
                path: "navigate",
                element: <UseNavigate/>
            },
			{
				path: "currency-converter",
				element: <Converter/>
			}
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;