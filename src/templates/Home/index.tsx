"use client"
import React from 'react'
import HighlightsComp from './components/Highlights'
import { Box } from '@mui/material'

const HomeTemplate = () => {
  return (
    <Box sx={{
      marginTop: -10,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <HighlightsComp />
    </Box>
  )
}

export default HomeTemplate