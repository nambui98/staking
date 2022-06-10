import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { AnyCnameRecord } from 'dns';

interface IProps {
  drawerStatus: boolean;
  handleToggleDrawer: (status: boolean) => void;
  dataProduct: any;
}

export const ProductDetail: React.FC<IProps> = ({drawerStatus, handleToggleDrawer}) => {

  return (
    <Box>
      <React.Fragment key={'right'}>
        <Drawer
          anchor={'right'}
          open={drawerStatus}
          onClose={() => handleToggleDrawer(false)}
        >
          <Stack>
            <Stack>
              
            </Stack>
          </Stack>
        </Drawer>
      </React.Fragment>
    </Box>
  )
}