import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react'
import { AddFolder } from './AddFolder';

export const Folders = () => {
  return (
    <Box>
      <Box>
        <Typography>
          Folders
        </Typography>
      </Box>
      <Box>
        <Box>
          <AddFolder />
        </Box>
      </Box>
    </Box>
  )
}
