import { DateFormat } from './../services/DateFormat';
export const Card = ({ id, nome, sobrenome, data }) => {
  return (
    <div className="h-44 rounded-lg m-4 p-4 bg-red-600 col-span-6 row-span-6">
      <div>
        <span>{id}</span>
        <span>{DateFormat(data)}</span>
      </div>
      <h2>{nome}</h2>

      <h2>{sobrenome}</h2>
    </div>
  );
};
