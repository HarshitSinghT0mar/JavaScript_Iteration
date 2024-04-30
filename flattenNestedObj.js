const nestedObj = {
    "company": {
        "name": "Tech Corp",
        "location": {
            "country": "USA",
            "city": "San Francisco"
        },
        "departments": {
            "engineering": {
                "manager": {
                    "name": "John Doe",
                    "age": 40
                },
                "team_lead": {
                    "name": "Alice Smith",
                    "age": 35
                },
                "team_members": {
                    "Bob Johnson": {
                        "age": 28
                    },
                    "Emily Brown": {
                        "age": 30
                    }
                }
            },
            "marketing": {
                "manager": {
                    "name": "Sarah Davis",
                    "age": 45
                },
                "team_lead": {
                    "name": "Michael Wilson",
                    "age": 37
                },
                "team_members": {
                    "Olivia Jones": {
                        "age": 32
                    },
                    "David Lee": {
                        "age": 29
                    }
                }
            }
        }
    },
    "home": {
        city: 'kanpur',
        pincode: 208017
    }
    
}


const flattenNestedObj = (obj) => {
    const result = {}

    const flatObj = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent + key

            if (typeof obj[key] === 'object') {
                flatObj(obj[key], newParent + '.')
            } else {
                result[newParent] = obj[key]
            }

        }

    }
    flatObj(obj, '')

    return result

}

console.log(flattenNestedObj(nestedObj));