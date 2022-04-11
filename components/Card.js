
export default function Card({id, nome, sobrenome, data}){
return(
    

		<div >
			<div>
				<span >{id}</span>
				<span >{data}</span>
			</div>
            <h2>{nome}</h2>

				<h2>{sobrenome}</h2>
			
		</div>
	);
}
