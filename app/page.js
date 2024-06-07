import Link from "next/link";



export default function Home() {
  return (
    <section className="flex items-center justify-center relative  h-[100vh] w-[78vw] mx-[15%]   ">

      <Link href="/hotel?course=1">
        <div className="flex items-center justify-center absolute bottom-[100px] left-0 bg-[#77D1E4] w-[400px] h-[400px] rounded-full drop-shadow-lg">
          <div className="flex items-center justify-center flex-col w-[200px] ">
            <h3 className="text-[white]">Дизайн</h3>
            <h4 className="text-[#47504B]">11000</h4>
            <h4 className="text-[#47504B]">людей учатся сейчас</h4>
          </div>
        </div>
      </Link>

      <Link href="/hotel?course=2">
        <div className="flex items-center justify-center absolute bottom-[160px] left-[290px] bg-[#9EE3BE] w-[240px] h-[240px] rounded-full drop-shadow-lg">
          <div className="flex items-center justify-center flex-col w-[200px] ">
            <h3 className="text-[white]">Маркетинг</h3>
            <h4 className="text-[#47504B]">7200</h4>
            <h4 className="text-[#47504B]">людей учатся сейчас</h4>
          </div>

        </div>
      </Link>
      <Link href="/hotel?course=3">
        <div className="flex items-center justify-center absolute bottom-[370px] left-[270px] bg-[#DC8A8A] w-[290px] h-[290px] rounded-full drop-shadow-lg">
          <div className="flex items-center justify-center flex-col w-[200px] ">
            <h3 className="text-[white]">Бизнес</h3>
            <h4 className="text-[#47504B]">9500</h4>
            <h4 className="text-[#47504B]">людей учатся сейчас</h4>
          </div>

        </div>
      </Link>
      <Link href="/hotel?course=4">
        <div className="flex items-center justify-center absolute bottom-[100px] left-[470px] bg-[#686DE9] w-[500px] h-[500px] rounded-full drop-shadow-lg">
          <div className="flex items-center justify-center flex-col w-[200px] ">
            <h3 className="text-[white]">IT</h3>
            <h4 className="text-[#47504B]">20000</h4>
            <h4 className="text-[#47504B]">людей учатся сейчас</h4>
          </div>

        </div>
      </Link>
      <Link href="/hotel?course=5">
        <div className="flex items-center justify-center absolute bottom-[370px] left-[800px] bg-[#D78EE3] w-[320px] h-[320px] rounded-full drop-shadow-lg">
          <div className="flex items-center justify-center flex-col w-[200px] ">
            <h3 className="text-[white]">Аналитика</h3>
            <h4 className="text-[#47504B]">5300</h4>
            <h4 className="text-[#47504B]">людей учатся сейчас</h4>
          </div>

        </div>
      </Link>
    </section>
  )
}
