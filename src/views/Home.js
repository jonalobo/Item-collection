const Home = () => {
  return (
    <>
      <div
        class="hero min-h-screen"
        style={{backgroundImage:"url('https://placeimg.com/1000/800/tech')"}}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Bienvenidos</h1>
            <p class="mb-5">
              A su tienda de tecnología, donde encontrará los dispositivos más novedosos del mercado.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
