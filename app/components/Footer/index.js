import React from 'react'
import PropTypes from 'prop-types'
import { dividerClasses, Grid } from '@mui/material'

function Footer({ trasnalte: t }) {
    return (
        <div>
            <Grid container >
                <Grid item xs={6} md={6} sm={12}>
                    请联系我
                </Grid>
                <Grid item xs={6} md={6} sm={12}>
                    446683009@qq.com
                </Grid>
            </Grid>
        </div>
    )
}



export default Footer;