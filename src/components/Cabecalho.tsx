import Link from 'next/link';

export const Cabecalho = () => {
  return (
    <div
      className="flex justify-around
		 items-center col-span-6"
    >
      <Link href="/posts/livros">
        <span>Livros</span>
      </Link>
      <Link href="/">
        <span>Autores</span>
      </Link>
    </div>
  );
};
