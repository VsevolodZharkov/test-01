import { render } from "@testing-library/react";
import style from './header.module.css'
export default function Header() {
	render(
		<>
			<h1 className={style.logo}>MINIMO</h1>
		</>
	)
}