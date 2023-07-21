const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io?name=${name}`)
    return res.json();
}

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`)
    return res.json();
}

const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`)
    return res.json();
}

interface Params {
    params: { name: string };
}

export default async function page({ params }: Params) {
    const agePromise = getPredictedAge(params.name)
    const genderPromise = getPredictedGender(params.name)
    const countryPromise = getPredictedCountry(params.name)

    const [age, gender, country] = await Promise.all([agePromise, genderPromise, countryPromise])
    return (
        <div>
            <div className="h-[300px] w-[400px] mx-auto my-10 border-2 border-solid border-white flex items-center justify-center flex-col">
                <div className="text-2xl text-center h-[25%] w-full relative top-[-40px]">
                    Personal Info
                </div>
                <div className="text-2xl relative top-[-30px]">
                    Age: {age?.age}
                </div>
                <div className="text-2xl relative top-[-10px]">
                    Gender: {gender?.gender}
                </div>
                <div className="text-2xl relative top-[7px]">
                    Country: {country?.country[0]?.country_id}
                </div>
            </div>
        </div>
    )
}
