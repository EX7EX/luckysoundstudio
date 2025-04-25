import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Lagos" invert={invert}>
          Anchor university Ayobo
          <br />
          7, unity street off alaja road
        </Office>
      </li>
      <li>
        <Office name="Ikeja" invert={invert}>
         7, Unity street off alaja road
          <br />
          ayobo lagos
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
