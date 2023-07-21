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
            <div>
                <div>
                    Personal Info
                </div>
                <div>
                    Age: {age?.age}
                </div>
                <div>
                    Gender: {gender?.gender}
                </div>
                <div>
                    Country: {country?.country[0]?.country_id}
                </div>
            </div>
        </div>
    )
}
