import Image from "next/image"
import { Button } from "../ui/button"
import { bandnerMetrics , type dataBandner } from "@/data/databandner"

export default function BannerList() {
  const items = bandnerMetrics;
  return (
    <>  
    <div className="col-span-12 bg-[#F2F0F1]">
      <div className="container mx-auto px-4 bg-[#F2F0F1]">
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
          {/* ซ้าย: รูป + ข้อความ + ปุ่ม */}
          <div className="p-6 space-y-6">
            <Image
              src="/Images/TextFind.png"
              alt="Text Find"
              width={650}
              height={600}
              // ให้รูปยืดเต็มความกว้างคอลัมน์ และยังรักษาสัดส่วน
              className="w-full h-auto"
              // ช่วย Next เลือกไซส์รูปเหมาะกับจอ
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />

            <p className="text-sm leading-6 text-muted-foreground">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>

            <Button variant="default" size="lg" className="w-[150px] rounded-[20px]">
              Shop Now
            </Button>

            <div className="flex flex-row">
              {items.map((item: dataBandner, index: number) => (
                <div className="px-7 pt-4 border-l border-border">
                  <p className="text-3xl leading-6 font-bold"> {item.value} {item.suffix} </p>
                  <p className="text-sm leading-6 text-muted-foreground"> {item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ขวา */}
          <div className="p-6 pb-0 space-y-6">
            <Image
              src="/Images/People.png"
              width={300}
              height={300}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Picture"
            />
          </div>
        </section>
      </div>
      <div className="bg-black">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {["/Images/v.png","/Images/z.png","/Images/g.png","/Images/p.png","/Images/c.png"].map((src, i) => (
              <div
                key={i}
                className="relative mx-auto h-10 sm:h-12 md:h-14 w-full max-w-[160px]" // กล่องมาตรฐานเท่ากันทุกช่อง
              >
                <Image
                  src={src}
                  alt={`Brand ${i + 1}`}
                  fill
                  className="object-contain"           // รักษาสัดส่วน ไม่บิด
                  sizes="(max-width: 640px) 50vw,
                        (max-width: 768px) 33vw,
                        20vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* <div className="col-span-6 bg-gray-100">
        <Image
          src="/Images/People.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div> */}
    </>
  )
}