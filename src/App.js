function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese mensaje a imprimir:
          <input type="text" name="valor1" />
        </p>
     
      </form>
    </div>
  );
}


function presion(e) {
  e.preventDefault();
  const v1=String(e.target.valor1.value, 10);
  const suma=v1;
  alert('Mensaje impreso: '+suma);
}


export default App;