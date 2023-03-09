import {useParams} from "solid-start";

export default function About() {
	const params = useParams();
	return (<div>Say Something About: {params.hello}</div>)
}
