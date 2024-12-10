function tryCatch () {
    try {
        console.log(volhoche); // shomvabbo error code golo try er vitor rkhte hoy jate error holew nex code golo runn kore

        if (isNaN(age)){
            // console.log('age not found')
            throw ('somthing wrong');
        }
    }
    catch {
        console.log('ki error hoyeche eikhane bolen or UI e show koren');
    }
    finally {
        console.log('eita must runn korbei, try er vitor vol thaklew')
    }

    console.log('try er vitor vol thaklew ei code golo runn korbe problem hobe na')
}

tryCatch();