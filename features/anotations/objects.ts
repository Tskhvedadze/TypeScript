const profile = {
    name: 'Alexs',
    age: 20,
    coords: {
        lat: 1,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age
    },
}

const { age }: { age: number } = profile

const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
