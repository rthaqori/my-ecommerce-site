const Card = () => {
  return (
    <div className="flex-auto">
      <div>
        <img
          className="h-80 min-w-60 rounded-2xl"
          src="https://img.freepik.com/free-photo/trendy-fashionable-couple-posing_155003-3401.jpg?t=st=1721575803~exp=1721579403~hmac=0a36b996997cd3e20186ac9b4e28722ead377c4c3eea57f3c67813892314b176&w=360"
          alt="abc"
        />
      </div>
      <div className="text-lg font-bold">Card title</div>
      <div className="flex items-center">
        <img
          className="h-auto w-20"
          src="https://t3.ftcdn.net/jpg/05/14/95/44/360_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg"
          alt="abc"
        />
        <span className="text-sm">
          <span className="font-bold">4.5/</span>5
        </span>
      </div>
      <div className="flex gap-2">
        <span id="dicuntedPrice" className="text-xl font-bold">
          $240
        </span>
        <span
          id="price"
          className="text-xl font-bold text-gray-400 line-through"
        >
          $260
        </span>
        <span
          id="discount"
          className="flex h-6 w-10 items-center rounded-3xl bg-red-200 p-2 text-xs font-medium text-red-600"
        >
          20%
        </span>
      </div>
    </div>
  );
};

export default Card;
