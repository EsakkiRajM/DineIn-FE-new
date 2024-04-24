import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { cuisniesFilter, tagsFilter, quickFilter } from "./constants";

// eslint-disable-next-line react/prop-types
export default function Filter({ filteredTags = [], setFilteredTags }) {
  const handleFilterChange = (event) => {
    if (event.target.checked) {
      setFilteredTags([...filteredTags, event.target.value]);
    } else {
      const filteredItem = filteredTags.filter(
        (filter) => filter != event.target.value
      );

      setFilteredTags(filteredItem);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Quick Filters
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {quickFilter.map((filter, index) => (
              <FormControlLabel
                key={index}
                name={filter}
                control={<Checkbox />}
                label={filter}
                value={filter}
                onChange={handleFilterChange}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Cuisines
        </AccordionSummary>
        <AccordionDetails>
          {cuisniesFilter.map((filter, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={filter}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Tags
        </AccordionSummary>
        <AccordionDetails>
          {tagsFilter.map((filter, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={filter}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
