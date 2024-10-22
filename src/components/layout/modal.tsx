import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export const Modal: React.FC<({ setShowHelp: (state: boolean) => void; })> = ({ setShowHelp }: { setShowHelp: (state: boolean) => void; }) => {
    return (
        <div className="modal-backdrop flex justify-center items-center">
            <div className="modal p-3 w-10/12 md:w-2/5 bg-white rounded text-gray-900">
                <h3 className='text-gray-900'>Help Dialog Box</h3>
                <Separator />
                <p>This is helper box that shows how to use the terminal</p>
                <br />
                <p>Type <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">login</span> to login a personalized console.</p>
                <p>Type <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">logout</span> to opt out of your personalized console.</p>
                <br />
                <p>1) <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">home</span> - A little bit about myself</p>
                <p>2) <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">about</span> - A little more-bit about myself</p>
                <p>3) <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">career</span> - My skills, projects, careers & experiences</p>
                <p>4) <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">contact</span> - You wanna hire me? Contact Me!!! (Yippie!&#x1F643;)</p>
                {/* <Separator /> */}
                <Button variant={'secondary'} onClick={() => setShowHelp(false)}
                    className='mt-3 rounded'
                >Close</Button>
            </div>
        </div >
    );
};
