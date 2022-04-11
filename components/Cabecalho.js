import React from 'react'
import Link from 'next/link'
import { Book, User} from 'phosphor-react'

function Cabecalho() {
	return (
		<div className='menu-horizontal-container'>
			<Link href="/posts/livros">
				<a><Book size={24} color="#fe0606" />
				<span>Livros</span></a>
			</Link>
			<Link href="/" >
          <a> <User size={24} color="#fe0606" />
		    <span >Autores</span></a> 
			</Link>
			
		</div>
	)
}

export default Cabecalho