import React from "react";
import Preloader from "../componets/common/Preloader/Preloader";

//сделали для ленивой загрузки React.lazy
//fallback - для того чтоб пока зрузится покозать что то ,например Preloader
export const withSuspense = (Component) => {
	return (props) => {
		return <React.Suspense fallback={<Preloader />} >
			<Component {...props} />
		</React.Suspense>
	};
}