const Article = () => {
  return (
    <div className="px-12">
      <div className="flex px-12 border-b-2 border-black          space-y-3 flex-col items-center justify-center">
        <p className="font-semibold text-[40px]">Бахтовар Бобоев</p>
        <p className="text-lg">React разработчик </p>
        <div className="grid pb-2">
          <button className="text-lg">English</button>
          <button className="text-lg">Русский</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
