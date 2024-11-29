import "boxicons";
const Main = () => {
  return (
    <div className="px-12 w-[35%] flex flex-col bg-slate-300 gap-3 py-5">
      <h2 className="font-medium text-2xl">Контакты</h2>
      <div className="tools">
        <div className="contact">
          <box-icon name="phone"></box-icon>
          <p className="copact">+992 902 30 03 00</p>
        </div>
        <div className="contact">
          <box-icon name="envelope"></box-icon>
          <p className="copact ">bakhtovar02@gamil.com</p>
        </div>
        <div className="contact">
          <box-icon name="instagram" type="logo"></box-icon>
          <a className="copact" href="https://www.instagram.com/baxtovarshoh/">
            Baxtovarshoh
          </a>
        </div>
      </div>
      <div className="tools">
        <h1 className="font-medium text-2xl ">Навыки</h1>
        <ul className="text-lg">
          <li>JavaScript</li>
          <li>Html</li>
          <li>Css</li>
          <li>Tailwind</li>
          <li>React</li>
          <li className="font-medium text-2xl  my-2">В процессе обучения</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div className="tools">
        <h1 className="font-semibold text-2xl">Образование</h1>
        <p className="font-medium">Среднее Образования и Высшее Образование</p>
        <p className="copact text-2xl">
          Университет экономики и финансов Таджикистана
        </p>
      </div>
      <div>
        <h1 className="font-medium text-2xl py-2">Языки</h1>
        <div className="black gap-5">
          <span>Таджикский</span>
          <div className="borders2">
            <div className="bg-black h-full rounded-xl"></div>
          </div>
        </div>
        <div className="black">
          Русский<div className="borders"></div>
        </div>
        <div className="black gap-5">
          <span>English</span>
          <div className="borders2">
            <div className="bg-black w-3/5 h-full rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
