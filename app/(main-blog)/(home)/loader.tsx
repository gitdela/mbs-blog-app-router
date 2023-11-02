import { Player } from '@lottiefiles/react-lottie-player';

const Loader = () => {
  return (
    <div className='max-w-screen-xl mx-auto h-[80vh] flex items-center justify-center '>
      {/* <Lottie style={{ height: 300, width: 300 }} animationData={Loader} /> */}
      <Player
        loop
        src={'/assets/cryptoloader.json'}
        autoplay
        speed={4}
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
};

export default Loader;
