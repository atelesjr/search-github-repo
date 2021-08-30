interface Size {
    xs: string 
    sm: string
    lg: string
    xg: string
    wd: String
}

interface Device {
    mobile: string
    tablet: string
    laptop: string
    desktop: string
    wide: string
}



export const size:Size  = {
    xs: '23.75em',  //320px
    sm: '48em',     //768px
    lg: '75em',     //1200px
    xg: '90em',     //1400px
    wd: '90.313em'  //1445px
};

export const device: Device = {
    mobile:     `only screen and (max-width: ${size.xs})`,  
    tablet:     `only screen and (min-width: ${size.sm})`,
    laptop:     `only screen and (min-width: ${size.lg})`,
    desktop:    `only screen and (min-width: ${size.xg})`,
    wide:       `only screen and (min-width: ${size.wd})`
};