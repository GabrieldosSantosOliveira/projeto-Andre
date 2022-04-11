
const formatDate = (dateTime) => {
	const date = new Date(dateTime.toString())
	return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(date)
}

export default function CardLivros({id, titulo, autor, editora,data,preco}){
return(
    

		<div className="h-44 rounded-lg m-4 p-4	 bg-red-600 col-span-6 row-span-6">
			<div>
				<span >{id}</span>
				<span >{autor}</span>

				<span >{formatDate(data)}</span>
			</div>
            <h2>{titulo}</h2>

				<h2>{editora}</h2>
				<h3>{preco}</h3>
			
		</div>
	);
}
