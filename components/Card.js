
const formatDate = (dateTime) => {
	const date = new Date(dateTime.toString())
	return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(date)
}
export default function Card({id, nome, sobrenome, data}){
return(
    

		<div className="h-44 rounded-lg m-4 p-4 bg-red-600 col-span-6 row-span-6">
			<div>
				<span >{id}</span>
				<span >{formatDate(data)}</span>
			</div>
            <h2>{nome}</h2>

				<h2>{sobrenome}</h2>
			
		</div>
	);
}
