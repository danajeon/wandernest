import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectDropdown = ({ sortAscending, sortDescending }) => {
    const [sorting, setSorting] = useState('');
    const handleSorting = (event) => {
        setSorting(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth size="small">
                <InputLabel>Sort by:</InputLabel>
                <Select
                    labelId="sorting-select-label"
                    id="sorting-select"
                    autoWidth
                    value={sorting}
                    label="Sort by:"
                    onChange={handleSorting}
                >
                    <MenuItem
                        value={"Date (Ascending)"}
                        onClick={sortAscending}
                    >
                        Date (Ascending)
                    </MenuItem>
                    <MenuItem
                        value={"Date (Descending)"}
                        onClick={sortDescending}
                    >
                        Date (Descending)
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
