import React, { useMemo } from 'react'
const urls1 = [{
    url: "https://www.youtube.com/embed/ijiDZTWqzYk",
    key: 1
},
{
    url: "https://www.youtube.com/embed/kyG35RSwenQ",
    key: 2
},
{
    url: "https://www.youtube.com/embed/-vh1CSCa3FQ",
    key: 3
},

{
    url: "https://www.youtube.com/embed/gV9M7VVBCdE",
    key: 4
}]

const urls2 = [{
    url: "https://www.youtube.com/embed/7Ny3f5WMEus?si=Y5b26HpRl2HGlRKd",
    key: 1
},

{
    url: "https://www.youtube.com/embed/Hh4tAEtBnYY?si=v9_gbsG8n5hEYmRY",
    key: 2
},
{
    url: "https://www.youtube.com/embed/EL9q_cpbYEI?si=ScVuxtuU2Ztt8yKo",
    key: 3
},
{
    url: "https://www.youtube.com/embed/kmAAyviaKzM?si=nFkvMYnAsRN4tYCA",
    key: 4
}]

const urls3 = [{
    url: "https://www.youtube.com/embed/beD_lKcg-e4?si=c3bmncuy7AJAAhY0",
    key: 1
},
{
    url: "https://www.youtube.com/embed/_NtRGaXPXx4?si=xfh2IZR02NTmPD6-",
    key: 2
},
{
    url: "https://www.youtube.com/embed/_Qu7KjELBbc",
    key: 3
},
{
    url: "https://www.youtube.com/embed/nxQcZfVkUJU?si=GWccAuxmaQDGsHnr",
    key: 4
}]
const urls4 = [
    {
        url: "https://www.youtube.com/embed/ULFRENlxjRQ?si=rlDa-apcbr1IZa7F",
        key: 1
    },
    {
        url: "https://www.youtube.com/embed/ltv-Dihu6UY?si=DkUkkwexuro_sS7I",
        key: 2
    },
    {
        url: "https://www.youtube.com/embed/FvqHr_iSGN8?si=1wDN0pAk3FaLrC__",
        key: 3
    },
    {
        url: "https://www.youtube.com/embed/J0YVHoE5kfU?si=wu4ME3GWoLbbQhSn",
        key: 4
    },
   ]

const Video = () => {

    const videoTab1 = useMemo(() => urls1.map((url, index) => <div key={index} className="video min-h-[220px] min-w-[50%]  md:h-[160px] mx-auto ">
        <iframe title='videos'
            className="w-full h-full rounded-lg   mx-auto"
            src={url.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>), [])
    const videoTab2 = useMemo(() => urls2.map((url, index) => <div key={index} className="video min-h-[220px] min-w-[64%]  md:h-[160px] mx-auto ">
        <iframe title='videos'
            className="w-full h-full rounded-lg   mx-auto"
            src={url.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>), [])
    const videoTab3 = useMemo(() => urls3.map((url, index) => <div key={index} className="video min-h-[220px] min-w-[50%]  md:h-[160px] mx-auto ">
        <iframe title='videos'
            className="w-full h-full rounded-lg   mx-auto"
            src={url.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>), [])
    const videoTab4 = useMemo(() => urls4.map((url, index) => <div key={index} className="video min-h-[220px] min-w-[50%]  md:h-[160px] mx-auto ">
        <iframe title='videos'
            className="w-full h-full rounded-lg   mx-auto"
            src={url.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>), [])
    return (
        <>
            <div className="grid md:grid-cols-4 grid-row-2 justify-between  items-center  mx-auto w-screen py-6 max-md:min-h-[1900px] md:h-[1000px] " >
                
                <div className="md:grid gap-4">
                    {videoTab1}
                </div>
                <div className="md:grid gap-4">
                    {videoTab2}
                </div>
                <div className="md:grid gap-4">
                    {videoTab3}
                </div>
                <div className="md:grid gap-4">
                    {videoTab4}
                </div>

            </div>

        </>
    )
}

export default Video
